# fuzzy-explorer

Fuzzy search files across user-defined directories.

## Features

- **Fast fuzzy search**: Uses algorithm with smart scoring.
- **Manual refresh**: Cache updates only when triggered by user.
- **File icons**: Display file icons in the list, via [file-icons](https://github.com/file-icons/atom).
- **External opening**: Open files with external applications, via [open-external](https://github.com/asiloisad-pulsar/open-external).
- **Chat attachment**: Attach file to Claude chat context, via [claude-chat](https://github.com/asiloisad-pulsar/claude-chat).

## Installation

To install `fuzzy-explorer` search for [fuzzy-explorer](https://web.pulsar-edit.dev/packages/fuzzy-explorer) in the Install pane of the Pulsar settings or run `ppm install fuzzy-explorer`. Alternatively, you can run `ppm install asiloisad/pulsar-fuzzy-explorer` to install a package directly from the GitHub repository.

## Commands

Commands available in `atom-workspace`:

- `fuzzy-explorer:toggle`: toggle fuzzy explorer panel,
- `fuzzy-explorer:update`: refresh file cache,
- `fuzzy-explorer:edit`: open config file.

Commands available in `.fuzzy-explorer`:

- `select-list:open`: open file,
- `select-list:open-external`: open file externally,
- `select-list:show-in-folder`: show in folder,
- `select-list:split-left/right/up/down`: open in split pane,
- `select-list:update`: refresh file index,
- `select-list:copy-r`: copy relative path,
- `select-list:copy-a`: copy absolute path,
- `select-list:copy-n`: copy file name,
- `select-list:insert-r`: insert relative path,
- `select-list:insert-a`: insert absolute path,
- `select-list:insert-n`: insert file name,
- `select-list:default-slash`: use default separator,
- `select-list:forward-slash`: use forward slash,
- `select-list:backslash`: use backslash,
- `select-list:query-item`: set query from selected item path,
- `select-list:query-selection`: set query from editor selection,
- `select-list:claude-chat`: attach file to claude-chat.

## Configuration

Create a config file at `~/.pulsar/explorer.cson` with an array of glob patterns:

```cson
[
  "C:/Projects/**"
  "D:/Work/src/*.ts"
  "E:/Documents/**/*.md"
]
```

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
