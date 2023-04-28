export const setStore = (name, content) => {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    return window.localStorage.setItem(name, content)
  }

  export const getStore = () => {
    const  user = JSON.parse(window.localStorage.getItem("userData")); 
    console.log(user, user)
      if(user)return true;
      return false;
    }
  