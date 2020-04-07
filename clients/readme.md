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
