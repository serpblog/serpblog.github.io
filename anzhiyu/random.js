var posts=["/post/C-七大经典排序算法详解.html","/post/数据排序 第1课时.html","/post/数据排序 第2课时.html","/post/数据排序练习1.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };