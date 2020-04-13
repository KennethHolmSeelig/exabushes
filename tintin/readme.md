setting macros

use convert to get chracter meta values
#config convert on
#config convert off

for numpad, have to turn it off to use macros

Install


mkdir tintin
cd tintin
sudo apt-get update
sudo apt-get install zlib1g-dev
sudo apt-get install libpcre3-dev
sudo apt install build-essential
wget https://downloads.sf.net/tintin/tintin-2.02.02.tar.gz
tar -zxvf tintin-2.02.02.tar.gz
cd tt/src
./configure
sudo make install


split map
#split 16 1
#map flag vtmap