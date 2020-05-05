#!/bin/bash
# This is a Tmux script that handles starting up tintin with all of the Aardwolf settings.
# You will need to change the -x <column> and -y <row> size
# Also change '/home/adam/tt/aard' to whatever directory you use for the settings.
# Requires Tmux 1.5 - See http://theixle.dyndns.org for a download link.

tmux kill-session -t genesis
tmux new-session -d -s genesis -x 147 -y 50
#map map 64 64 overwrite map.txt;
# split it into two halves
tmux splitw -h -p 50 "tail -fs .1 -n 80 `pwd`/output/map.txt"
tmux selectp -t 0
tmux splitw -v -l 40 "tt++ -G `pwd`/lokthar.tin;bash -i"
tmux selectp -t 0
tmux splitw -v -l 22 "tail -fs .1 `pwd`/output/chat.txt"
tmux selectp -t 2
tmux attach-session -t genesis


tail -fs .1 `pwd`/output/chat.txt

selectp -t 1 # select the new, second (1) pane
tmux splitw -v -l 22 "tail -fs .1 -n 80 `pwd`/output/map.txt"
tmux selectp -t 0
tmux splitw -h -l 159 "tail -fs .1 `pwd`/output/chat.txt"
tmux selectp -t 0
tmux attach-session -t genesis

#tmux splitw -h -l 68 'tail -fs .1 /home/adam/tt/aard/chars'
#tmux selectp -t 0
#tmux splitw -v -l 22 'tail -fs .1 /home/adam/tt/aard/minimap'
#tmux selectp -t 0
#tmux splitw -v -l 14 'tail -fs .1 /home/adam/tt/aard/group'
#tmux selectp -t 5
#tmux splitw -v -l 20 'tail -fs .1 /home/adam/tt/aard/quest'
#tmux selectp -t 4
