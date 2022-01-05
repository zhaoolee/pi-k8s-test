# pi-k8s-test

树莓派k8s测试程序


将Dockerfile放入 树莓派 任意目录下, 然后运行  

```
git add .
git commit -m "ok"
git push
sudo docker build  -t zhaoolee/pi-k8s-test:002 . --no-cache
sudo docker push zhaoolee/pi-k8s-test:002
```


测试容器

```
docker run -p 3000:3000 --name pi-k8s-test-server zhaoolee/pi-k8s-test:001
```
