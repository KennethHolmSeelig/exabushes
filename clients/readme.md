# setup client

## github to client connection
Links for more info
[github generating SSH key guide](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
[githun adding the key to profile guide](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

1. generate the key when logged in to client
```sh
ssh-keygen -t rsa -b 4096 -C "kennethhn@gmail.com"
<enter>
<enter>
<enter>
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub
#copy output to buffer
```
2. goto github->settings->SSH and GPG keys->'New SSH key'
3. in title input something like 'kenneth tintin server'
4. put copied output in key
5. click add
7. Now you can clone without inputting user/pass
```sh
git clone git@github.com:KennethHolmSeelig/exabushes.git
#answer 'yes' when prompted
```


## putty
download putty and puttygen

### On windows
1. create a key with puttygen
2. save keys, copy public key to buffer
3. on cloud client, put public key in ~/
4. 

### On unix

username is gmail account
```sh
ssh-keygen -t rsa -C [USERNAME]
<enter>
<enter>
<enter>
```

2. convert ssh key to ppk
```sh
puttygen ~/.ssh/id_rsa -o keyfile.ppk
```

3. start putty
4. create new session
5. in auth browse to <keyfile>.ppk

Add as new key here, restart client
https://console.cloud.google.com/compute/metadata/sshKey