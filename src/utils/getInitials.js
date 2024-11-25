const getInitials = (name, surname) => {
  if (!surname) {
    const nameSplit = name?.split(' ');
    if (nameSplit.length > 1) {
      return nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
    }
    return nameSplit[0].charAt(0);
  }

  return name?.charAt(0) + surname?.charAt(0);
};

export default getInitials;
