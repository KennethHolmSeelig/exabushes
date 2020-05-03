#!/bin/bash
# This is a Tmux script that handles starting up tintin with all of the Aardwolf settings.
# You will need to change the -x <column> and -y <row> size
# Also change '/home/adam/tt/aard' to whatever directory you use for the settings.
# Requires Tmux 1.5 - See http://theixle.dyndns.org for a download link.

tmux kill-session -t genesis
tmux new-session -d -s genesis -x 189 -y 47
tmux splitw -h -l 159 "tail -fs .1 `pwd`/afile.txt"
tmux attach-session -t genesis
tmux splitw -v -l 37 "tt++ -G `pwd`/exabushes/lokthar.tin;bash -i"

#tmux splitw -h -l 68 'tail -fs .1 /home/adam/tt/aard/chars'
#tmux selectp -t 0
#tmux splitw -v -l 22 'tail -fs .1 /home/adam/tt/aard/minimap'
#tmux selectp -t 0
#tmux splitw -v -l 14 'tail -fs .1 /home/adam/tt/aard/group'
#tmux selectp -t 5
#tmux splitw -v -l 20 'tail -fs .1 /home/adam/tt/aard/quest'
#tmux selectp -t 4
