  export const convertToMobilePhone = (phone: string) => {
    let formattedPhone = phone.replace(/-/g, "");
    if (formattedPhone.startsWith("0")) {
      formattedPhone = `972${formattedPhone.substring(1)}`;
    }
}