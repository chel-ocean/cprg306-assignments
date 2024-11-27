export default function Item({id, name, quantity, category, onDelete}){
  return(
    <section className="my-2 ml-2 pt-3">
      <div className="bg-slate-700 border-2 border-white rounded-md p-3 w-60">
        <ul className="text-white">
          <li>Item: {name}</li>
          <li>Quantity: {quantity}</li>
          <li>Category: {category}</li>
        </ul>
        <button onClick={() => onDelete(id) } className="text-white bg-red-500 p-1 rounded-md">Delete</button>
      </div>
    </section>
  );
}