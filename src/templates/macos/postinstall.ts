export default (opts) => `#!/bin/bash

rm $HOME/.installer-debug-log.txt || true
echo "Running installer..." > $HOME/.installer-debug-log.txt
./ExManCmd_mac/Contents/MacOS/ExManCmd --install ./bundle.zxp &> $HOME/.installer-debug-log.txt
rm -rf $HOME/Library/Application\ Support/zxpinstaller || true
cp -r ./ExManCmd_mac $HOME/Library/Application\ Support/zxpinstaller
chown -R $USER:staff $HOME/Library/Application\ Support/zxpinstaller
echo "Done." >> $HOME/.installer-debug-log.txt
`
