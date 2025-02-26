export function Avatar({handleUploadImage, handleChangeImage, handleRemoveImage, avatar}) {
  
  return (
    <div className="w-xs">
      <h3 id="avatarTitle" className="text-xl opacity-80 my-2">Upload Avatar</h3>
     
      <label id="avatarInput1" htmlFor="inputFile" className="
        flex flex-col items-center justify-center 
        outline outline-dashed outline-amber-50/60
        hover:cursor-pointer
        my-2 h-32 p-3 
        rounded-xl w-full bg-blue-100/5 backdrop-blur-lg
      ">
          <input className="hidden" id="inputFile" type="file" onChange={handleUploadImage}/>
          <img src="/assets/images/icon-upload.svg" className="w-15 h-15"/>
          Drag and drop or click to upload
      </label>
      
      <div id="avatarInput2" className=
        "hidden flex-col items-center justify-center outline outline-dashed rounded-xl my-2 h-32">
        <img src={avatar} alt="avatar" className="w-15 h-15"/>
        <div>
          <button className="bg-gray-400 rounded-md p-0.5 mx-0.5" onClick={handleRemoveImage}>Remove image</button>
          <button className="bg-gray-400 rounded-md p-0.5 mx-0.5" onClick={handleChangeImage}>Change image</button>
        </div>
      </div>
      
      <div id="infoAvatar">
        <img src="assets\images\icon-info.svg" alt="info" className="inline"/>
        <p className="inline text-[10px] opacity-70 px-2">Upload your photo (JPG or PNG, max size: 500KB).</p>
      </div>
      
      <div id="errAvatar1" className="hidden">
        <img src="assets\images\icon-info.svg" alt="info" className="inline"/>
        <span className="text-red-400! text-[10px] px-2">Please upload a photo.</span>
      </div>

      <div id="errAvatar2" className="hidden">
        <img src="assets\images\icon-info.svg" alt="info" className="inline"/>
        <span className="text-red-400! text-[10px]">File too large. Please upload a photo under 500kb.</span>
      </div>
    </div>
  )
}