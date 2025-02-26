export function Avatar({handleUploadImage, handleChangeImage, handleRemoveImage, preview}) {
  
  return (
    <div>
      <h3>Upload Avatar</h3>
     
      <label id="avatarInput1" htmlFor="inputFile" className="flex flex-col items-center border border-dashed border-black rounded-lg ">
        <input className="hidden" id="inputFile" type="file" onChange={handleUploadImage}/>
        <img src="/assets/images/icon-upload.svg" className="w-15 h-15"/>
        Drag and drop or click to upload
      </label>
      
      <div id="avatarInput2" className="hidden flex-col items-center border border-dashed border-black rounded-lg">
        <img src={preview} alt="avatar" className="w-15 h-15"/>
        <div>
          <button className="bg-gray-400 rounded-md" onClick={handleRemoveImage}>Remove image</button>
          <button className="bg-gray-400 rounded-md" onClick={handleChangeImage}>Change image</button>
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