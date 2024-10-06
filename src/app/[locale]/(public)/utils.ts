export const stripHtmlTags = (html: string) => {
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;
  return tempDiv.innerText || tempDiv.textContent;
};
