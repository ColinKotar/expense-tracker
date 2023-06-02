import React from "react"
import { List } from "@mui/material"
import { useFirestore, useFirestoreCollectionData } from "reactfire"
import { collection } from "firebase/firestore"
import { Empty, Loading, Error } from "../Placeholder"
import ExpenseItem from "./ExpenseItem"

const ExpenseList = () => {
  // access the Firestore library
  const expensesColRef = collection(useFirestore(), "expenses")

  // subscribe to a document for realtime updates
  const { status, data } = useFirestoreCollectionData(expensesColRef)

  // check the loading status
  if (status === "loading") return <Loading />
  if (status === "error")
    return <Error title="Could not get expenses, try again!" />
  if (data.length === 0)
    return <Empty title="No expenses found, that's a good thing!" />
  return (
    <List>
      {/* Existing Expense Items */}
      {data.map(expense => (
        <ExpenseItem key={expense.NO_ID_FIELD} expense={expense} />
      ))}

      {/* New Expense Item */}
      <ExpenseItem />
    </List>
  )
}

export default ExpenseList
