export function Avatar() {
  return (
    <>
      <h3>Upload Avatar</h3>
      <label for="inputFile">
        <input id="inputFile" type="file"/>
        <img src="/assets/images/icon-upload.svg"/>
        Drag and drop or click to upload
      </label>
      <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
    </>
  )
}