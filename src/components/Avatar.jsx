export function Avatar() {

  const labelStles = {
    border: '1px solid black',
  }

  const errorAvatarStyles = {
    display: 'none',
  }

  return (
    <div>
      <h3>Upload Avatar</h3>
      <label for="inputFile"  style={labelStles}>
        <input style={{display: 'none'}} id="inputFile" type="file"/>
        <img src="/assets/images/icon-upload.svg"/>
        Drag and drop or click to upload
      </label>
      <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
      
      <div className="errorAvatar" style={errorAvatarStyles}>
        <img src="assets\images\icon-info.svg" alt="info" />
        <span>Please upload a photo.</span>
        <span>File too large. Please upload a photo under 500kb.</span>
      </div>
    </div>
  )
}