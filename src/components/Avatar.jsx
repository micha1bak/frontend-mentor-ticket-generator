export function Avatar() {

  const labelStles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    border: '1px solid black',
    borderRadius: '5px',
    padding: '30px',
  }

  const errorAvatarStyles = {
    display: 'none',
  }

  const avatarUploadedStyles = {
    display: 'none',
  }

  return (
    <div>
      <h3>Upload Avatar</h3>

     
      <label htmlFor="inputFile"  style={labelStles}>
        <input style={{display: 'none'}} id="inputFile" type="file"/>
        <img src="/assets/images/icon-upload.svg"/>
        Drag and drop or click to upload
      </label>
      
      <div className="avatarUploaded" style={avatarUploadedStyles}>
        <img src="null" alt="avatar" />
        <div>
          <button>Remove image</button>
          <button>Change image</button>
        </div>
      </div>

      <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
      
      <div className="errorAvatar" style={errorAvatarStyles}>
        <img src="assets\images\icon-info.svg" alt="info" />
        <span>Please upload a photo.</span>
        <span>File too large. Please upload a photo under 500kb.</span>
      </div>
    </div>
  )
}