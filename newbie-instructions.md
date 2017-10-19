##  Scott Wyatt was kind enough to provide a TrailsJS working example using Sequelize. 
Here are the steps I used to get it running:

##      O N E
- build a virtual machine, start it and log into it:
- https://console.cloud.google.com
- create machine-type: micro - choose centos7 environment

##     T W O
Run the following commands in the bash shell:

```sh
sudo yum  --assumeyes  update  ;               ## optional but always a good idea
sudo yum  --assumeyes  gcc gcc-c++  ;            
sudo yum  --assumeyes  install  bzip2  bzip2-devel  curl  git  tar   wget   yum-utils   ;
sudo yum  --assumeyes  groupinstall "Development Tools"  ;

sudo firewall-cmd --zone=dmz --add-port=3000/tcp --permanent ; sudo firewall-cmd --reload ;

curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -  ;
sudo  yum -y  install nodejs;
node -v ;  ## look for v8.7.0

sudo  npm install -g yo generator-trails;

git clone  https://github.com/scott-wyatt/trails-example-sequelize ;
cd trails-example-sequelize ;

npm  install  && npm  start  ;
```

##      T H R E E
Now install https://www.getpostman.com/ and enter something like this into 

POST  
body-->JSON block and click "Send:" 
```json
{  "username": "marky-boy",   "email": "markyboy@gmail.com"  }
```

##      F O U R
Check to see that there are now two records in your new database.
