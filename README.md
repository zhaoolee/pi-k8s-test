# pi-k8s-test

树莓派k8s测试程序


将Dockerfile放入 树莓派 任意目录下, 然后运行  

```
cd /opt
wget https://raw.githubusercontent.com/zhaoolee/pi-k8s-test/main/Dockerfile
docker build  -t pi-k8s-test:001 . --no-cache
```


测试容器

```
docker run -p 3000:3000 --name pi-k8s-test-server pi-k8s-test:001
```
