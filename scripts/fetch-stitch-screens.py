#!/usr/bin/env python3
"""Download Stitch screen HTML and screenshots via the public REST API.

Requires: STITCH_API_KEY (same value as X-Goog-Api-Key in .cursor/mcp.json)

Usage:
  export STITCH_API_KEY="your-key"
  python3 scripts/fetch-stitch-screens.py

Writes to ../stitch-export/ relative to repo root.
"""
from __future__ import annotations

import json
import os
import subprocess
import sys
from pathlib import Path

PROJECT_ID = "5825176448135920492"
SCREENS: list[tuple[str, str]] = [
    ("82c13f124b644c7682d2f4811cf68eab", "our-story"),
    ("3b3f763d9e5f49189f01e2c85e57c956", "our-programs"),
    ("fb319c403a1143d091fc627cf47cf4d9", "home"),
    ("d33ba1b0c3c1429fab6401fdedc6373f", "contact-us"),
]

REPO_ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = REPO_ROOT / "stitch-export"


def main() -> None:
    api_key = os.environ.get("STITCH_API_KEY", "").strip()
    if not api_key:
        print("Set STITCH_API_KEY to your X-Goog-Api-Key value.", file=sys.stderr)
        sys.exit(1)

    OUT_DIR.mkdir(parents=True, exist_ok=True)

    import urllib.error
    import urllib.request

    for screen_id, slug in SCREENS:
        meta_url = f"https://stitch.googleapis.com/v1/projects/{PROJECT_ID}/screens/{screen_id}"
        req = urllib.request.Request(meta_url, headers={"X-Goog-Api-Key": api_key})
        try:
            with urllib.request.urlopen(req, timeout=120) as resp:
                data = json.load(resp)
        except urllib.error.HTTPError as e:
            print(f"{slug}: HTTP {e.code} {e.reason}", file=sys.stderr)
            sys.exit(1)

        title = data.get("title", slug)
        html_url = data["htmlCode"]["downloadUrl"]
        shot_url = data["screenshot"]["downloadUrl"]
        html_path = OUT_DIR / f"{slug}.html"
        shot_path = OUT_DIR / f"{slug}-screenshot.jpg"

        print(title)
        subprocess.run(["curl", "-sSL", "-o", str(html_path), html_url], check=True)
        subprocess.run(["curl", "-sSL", "-o", str(shot_path), shot_url], check=True)
        print(f"  html -> {html_path.name} ({html_path.stat().st_size} bytes)")
        print(f"  screenshot -> {shot_path.name} ({shot_path.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
