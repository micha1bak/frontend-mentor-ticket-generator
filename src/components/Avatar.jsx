export function Avatar() {

  return (
    <div>
      <h3>Upload Avatar</h3>

     
      <label htmlFor="inputFile" className="flex flex-col items-center border border-dashed border-black rounded-lg p-10">
        <input className="hidden" id="inputFile" type="file"/>
        <img src="/assets/images/icon-upload.svg"/>
        Drag and drop or click to upload
      </label>
      
      <div className="hidden">
        <img src="null" alt="avatar" />
        <div>
          <button>Remove image</button>
          <button>Change image</button>
        </div>
      </div>

      <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
      
      <div className="hidden">
        <img src="assets\images\icon-info.svg" alt="info" />
        <span>Please upload a photo.</span>
        <span>File too large. Please upload a photo under 500kb.</span>
      </div>
    </div>
  )
}