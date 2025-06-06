function InfoHide({value, lib_value, hidden, onShowInfo}) {

  return (
    <button onClick={onShowInfo} className={`min-w-3/4 mx-auto my-2 px-4 py-1 text-lg ${hidden ? 'bg-teal-600 text-white' : 'border-teal-400 border-2 text-yellow-400 cursor-default'} font-semibold rounded-full border`}>
      {hidden ? lib_value : value}
    </button>
  );
}

export default InfoHide;