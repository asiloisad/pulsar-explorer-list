# fuzzy-explorer

Fuzzy search files across user-defined directories.

## Features

- **Fast fuzzy search**: Uses algorithm with smart scoring.
- **Manual refresh**: Cache updates only when triggered by user.
- **File icons**: Display file icons in the list, via [file-icons](https://github.com/file-icons/atom).
- **External opening**: Open files with external applications, via [open-external](https://web.pulsar-edit.dev/packages/open-external).
- **Chat attachment**: Attach file to Claude chat context, via [claude-chat](https://web.pulsar-edit.dev/packages/claude-chat).

## Installation

To install `fuzzy-explorer` search for [fuzzy-explorer](https://web.pulsar-edit.dev/packages/fuzzy-explorer) in the Install pane of the Pulsar settings or run `ppm install fuzzy-explorer`. Alternatively, you can run `ppm install asiloisad/pulsar-fuzzy-explorer` to install a package directly from the GitHub repository.

## Configuration

Create a config file at `~/.pulsar/explorer.cson` with an array of glob patterns:

```cson
[
  "C:/Projects/**"
  "D:/Work/src/*.ts"
  "E:/Documents/**/*.md"
]
```

## Commands

Commands available in `atom-workspace`:

- `fuzzy-explorer:toggle`: <kbd>Ctrl+Alt+P</kbd> toggle fuzzy explorer panel,
- `fuzzy-explorer:update`: refresh file cache,
- `fuzzy-explorer:edit`: open config file.

Commands available in `.fuzzy-explorer`:

- `select-list:open`: <kbd>Enter</kbd> open file,
- `select-list:open-external`: <kbd>Ctrl+Enter</kbd> open file externally,
- `select-list:show-in-folder`: <kbd>Alt+Enter</kbd> show in folder,
- `select-list:split-left/right/up/down`: <kbd>Alt+Left/Right/Up/Down</kbd> open in split pane,
- `select-list:update`: <kbd>F5</kbd> refresh file index,
- `select-list:copy-r`: <kbd>Alt+C</kbd> copy relative path,
- `select-list:copy-a`: <kbd>Alt+C Alt+A</kbd> copy absolute path,
- `select-list:copy-n`: <kbd>Alt+C Alt+N</kbd> copy file name,
- `select-list:insert-r`: <kbd>Alt+V</kbd> insert relative path,
- `select-list:insert-a`: <kbd>Alt+V Alt+A</kbd> insert absolute path,
- `select-list:insert-n`: <kbd>Alt+V Alt+N</kbd> insert file name,
- `select-list:default-slash`: <kbd>Alt+0</kbd> use default separator,
- `select-list:forward-slash`: <kbd>Alt+/</kbd> use forward slash,
- `select-list:backslash`: <kbd>Alt+\</kbd> use backslash,
- `select-list:query-item`: <kbd>Alt+Q</kbd> set query from selected item path,
- `select-list:query-selection`: <kbd>Alt+S</kbd> set query from editor selection,
- `select-list:claude-chat`: <kbd>Alt+F</kbd> attach file to claude-chat.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
