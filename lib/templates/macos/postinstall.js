"use strict";
exports.__esModule = true;
exports["default"] = function (opts) { return "#!/bin/bash\n\nrm $HOME/.installer-debug-log.txt || true\necho \"Running installer...\" > $HOME/.installer-debug-log.txt\n./ExManCmd_mac/Contents/MacOS/ExManCmd --install ./bundle.zxp &> $HOME/.installer-debug-log.txt\nrm -rf $HOME/Library/Application Support/zxpinstaller || true\ncp -r ./ExManCmd_mac $HOME/Library/Application Support/zxpinstaller\nchown -R $USER:staff $HOME/Library/Application Support/zxpinstaller\necho \"Done.\" >> $HOME/.installer-debug-log.txt\n"; };
