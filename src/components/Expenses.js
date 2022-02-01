import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css';

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((element) => {
        return (
          <ExpenseItem
            key={element.id}
            date={element.date}
            title={element.title}
            amount={element.amount}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
