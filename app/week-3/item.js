export default function Item({name, quantity, category}){
  return(
    <section className="my-2 ml-2 pt-3">
      <div className="bg-slate-700 border-2 border-white rounded-md p-3 w-60">
        <ul >
          <li>Item: {name}</li>
          <li>Quantity: {quantity}</li>
          <li>Category: {category}</li>
        </ul>
      </div>
    </section>
  );
}