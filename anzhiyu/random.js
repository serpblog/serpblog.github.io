var posts=["/post/C-七大经典排序算法详解.html","/post/Python教程-基本操作-变量.html","/post/python递归.html","/post/数据排序 第1课时.html","/post/数据排序练习1.html","/post/递归算法.html","/post/队列.html","/post/数据排序 第2课时.html","/post/栈.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };