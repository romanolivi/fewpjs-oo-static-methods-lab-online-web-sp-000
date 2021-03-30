class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  };

  static titleize(string) {
    let str = string.split(' ');
    let result = [];
    let noCap = ["a", "an", "but", "from", "and", "of", "for", "at", "by", "the"];
    
    for (let i = 0; i < str.length; i++) {
      if (i === 0) {
        result.push(this.capitalize(str[i]))
      } else {
        if (noCap.includes(str[i])) {
          result.push(str[i])
        } else {
          result.push(this.capitalize(str[i]))
        }
      }
    }
    return result.join(' ');
  };
}