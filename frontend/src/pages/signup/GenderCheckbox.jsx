const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
					<span className='label-text' style={{ color: "black" }}>Masculino</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						checked={selectedGender === "male"}
						onChange={() => onCheckboxChange("male")}
					/>
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
					<span className='label-text' style={{ color: "black" }}>Feminino</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						checked={selectedGender === "female"}
						onChange={() => onCheckboxChange("female")}
					/>
				</label>
			</div>
			<div className='form-control'></div>
				<label className={`label gap-2 cursor-pointer  ${selectedGender === "other" ? "selected" : ""}`}>
					<span className='label-text' style={{ color: "black" }}>Outro</span>
					<input
						type='checkbox'
						className='checkbox border-slate-900'
						checked={selectedGender === "other"}
						onChange={() => onCheckboxChange("other")}
					/>
				</label>
			</div>
	);
};
export default GenderCheckbox;