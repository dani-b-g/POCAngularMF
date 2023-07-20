import { Injectable } from '@angular/core';

/**
 * object with methods to replace the localstorage using cookies (IE problems).
 * It's outside the class to avoid using it again and again.
 */
const myLocalStorage = {
  getItem(prop: any) {
    prop = prop + '=';
    const m = document.cookie.split(';');
    for (const param of m) {
      const aux = param.replace(/(^\s+|\s+$)/, '');
      if (aux && aux.indexOf(prop) === 0) {
        return aux.substr(prop.length);
      }
    }
    return null;
  },
  setItem(prop: any, value: any) {
    document.cookie = prop + '=' + value + '; Path=/;';
  },
  length() {
    return 1;
  },
  removeItem(prop: any) {
    console.log('ey', prop);
    document.cookie = prop + '= ""; Path=/;';
  }
};

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  /**
   * method to get the item from storage
   */
  getItem(prop: any) {
    if (sessionStorage) {
      return sessionStorage.getItem(prop);
    } else {
      return myLocalStorage.getItem(prop);
    }
  }

  /**
   * method to set the item from storage
   */
  setItem(prop: any, value: any) {
    if (sessionStorage) {
      return sessionStorage.setItem(prop, value);
    } else {
      return myLocalStorage.setItem(prop, value);
    }
  }

  /**
   * method to remove the item from storage
   */
  removeItem(prop: any) {
    if (sessionStorage) {
      sessionStorage.removeItem(prop);
    } else {
      myLocalStorage.removeItem(prop);
    }
  }
}
