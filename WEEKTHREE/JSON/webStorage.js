/*We use webstorage instead of DATABASE.
Use MongoDB
Databases are not designed to keep images, pixels and audios. It can only hold strings, always use a cloud storage provider to store those videos.
Session storage for login/ussd/banking fewminutes is like cookies/token access to cookie stays.
We store, retrieve and remove data
Is an object known by many browsers with three major methods.*/
localStorage.setItem("username", "Parvin")
localStorage.getItem()
localStorage.removeItem()
localStorage


//Temporary when you close or restart browser, it goes.
sessionStorage.setItem()
sessionStorage.getItem()
sessionStorage.removeItem()
sessionStorage