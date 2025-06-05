#!/bin/bash

src="websiteCommonFiles"     # Source folder
dst="."     # Destination folder

find "$src" -type f | while read -r filepath; do
    echo "Processing: $filepath"
    relpath="${filepath#$src/}"
    target_dir="$dst/$(dirname "$relpath")"
    target_link="$target_dir/$(basename "$filepath")"


    # Skip if in .git folder
    if [[ "$target_link" != *"././.git"* ]]; then
        mkdir -p "$target_dir"


        if [ -e "$target_link" ] && [ ! -L "$target_link" ]; then
            echo "Error: '$target_link' already exists and is not a symlink." >&2
            exit 1
        fi

        if [ ! -e "$target_link" ]; then
            ln -s "$(realpath "$filepath")" "$target_link"
        fi

        if ! grep -qxF "$relpath" ".gitignore"; then
            echo "$relpath" >> ".gitignore"
        fi
    fi
done
