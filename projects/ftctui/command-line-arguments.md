---
sidebar_position: 2
---

# Command-line arguments

FTCTui supports some extra options when running the app via command-line arguments.

To use them, you'll need to run it manually from the terminal, such as with `.\ftctui.exe --option`, `./ftctui --option` or `ftctui --option`.

## Logging

You can pass the option `-l <LOG_LEVEL>` or `--log-level <LOG_LEVEL>` to enable logging at the specified level.

Possible levels are `error`, `warn`, `info`, `debug` and `trace`.

For example, to enable logging at the trace level (with the most messages logged, the preferred level for bug reports):

`ftctui --log-level trace`

The log file will be created at `ftctui.log`.

## Dumping telemetry

You can pass the option `-e` or `--export-telemetry`, which will dump all telemetry packets into `telemetry_log.json` in the active directory.

[More on how to use this data](graphs-with-telemetry)
