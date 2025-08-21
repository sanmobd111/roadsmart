import { useRef } from 'react';

export default function CustomFileInput({ onChange, children }) {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e) => {
    onChange(e.target.files);
  };

  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        onChange={handleChange}
        className="hidden"
      />
      <div onClick={handleClick} className="cursor-pointer block">
        {children}
      </div>
    </div>
  );
}
