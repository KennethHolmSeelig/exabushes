git pull
if [ -z "$1" ]
  then
    echo "Supply discord bot token, maybe $DISCORD_TOKEN ?"
else
  sudo node src/index.js $1
fi