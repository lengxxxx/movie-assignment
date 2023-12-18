         let CheckCred = () => {
      if (!sessionStorage.getItem("user-creds"))
      window.location.href = 'index.html';
    }
    window.addEventListener('load', CheckCred);
    
