var posts=["/post/数据排序 第1课时.html","/post/C-七大经典排序算法详解.html","/post/数据排序 第2课时.html","/post/数据排序练习1.html","/post/递归算法.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };