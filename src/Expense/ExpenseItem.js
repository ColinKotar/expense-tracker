import {
  DirectionsCarRounded,
  FastfoodRounded,
  FolderRounded,
  ShoppingBagRounded,
  SportsEsportsRounded,
  WbIncandescentRounded,
} from "@mui/icons-material"
import {
  Box,
  Button,
  IconButton,
  InputBase,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
  Select,
} from "@mui/material"
import { collection, doc, setDoc } from "firebase/firestore"
import React, { useState } from "react"
import { useFirestore } from "reactfire"

const categoryToIcon = {
  food: <FastfoodRounded />,
  transportation: <DirectionsCarRounded />,
  bills: <WbIncandescentRounded />,
  entertainment: <SportsEsportsRounded />,
  shopping: <ShoppingBagRounded />,
}
const CATEGORIES = Object.keys(categoryToIcon)

const CategoryMenu = ({ value, onChange }) => {
  // state
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  // handlers
  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleMenuClick = e => {
    onChange(e)
    handleClose()
  }

  return (
    <>
      <IconButton
        id="category-button"
        aria-controls={open ? "category-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "background.light",
          borderRadius: "0.5rem",
          height: "2.5rem",
          width: "2.5rem",
          ".MuiSvgIcon-root": {
            fontSize: "1.75rem",
            color: "text.secondary",
          },
        }}
        onClick={handleClick}
      >
        {categoryToIcon[value] || <FolderRounded />}
      </IconButton>

      <Menu
        id="category-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "category-button",
        }}
      >
        <MenuList>
          {CATEGORIES.map(category => (
            <MenuItem
              key={category}
              selected={category === value}
              onClick={() => handleMenuClick(category)}
            >
              <ListItemIcon>
                {categoryToIcon[category] || <FolderRounded />}
              </ListItemIcon>

              <ListItemText>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  )
}

const ExpenseItem = ({ expense }) => {
  const isNew = expense === undefined

  // form state
  const [newExpense, setNewExpense] = useState({
    name: expense?.name || "",
    amount: expense?.amount || 0,
    category: expense?.category || CATEGORIES[0],
    timeType: expense?.timeType || "month",
  })

  // expense mutation handler
  const newExpenseRef = doc(collection(useFirestore(), "expenses"))
  const createExpense = async () => {
    // TODO: get mutation response, reset expense if successful
    // otherwise change create button to retry button
    console.log(newExpense)
    await setDoc(newExpenseRef, {
      data: newExpense,
    })
    setNewExpense({
      name: "",
      amount: 0,
      category: CATEGORIES[0],
      timeType: "month",
    })
  }

  // form handlers
  const handleNameChange = e => {
    setNewExpense(prev => ({ ...prev, name: e.target.value }))
  }
  const handleAmountChange = e => {
    setNewExpense(prev => ({ ...prev, amount: e.target.value }))
  }
  const handleCategoryChange = value => {
    setNewExpense(prev => ({ ...prev, category: value }))
  }
  const handleTimeTypeChange = e => {
    setNewExpense(prev => ({ ...prev, timeType: e.target.value }))
  }

  return (
    <ListItem sx={{ flexDirection: "row", alignItems: "center", gap: "1rem" }}>
      <CategoryMenu
        value={newExpense.category}
        onChange={handleCategoryChange}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <InputBase
          variant="h6"
          value={newExpense.name}
          onChange={handleNameChange}
          placeholder="Name"
        >
          {newExpense.name}
        </InputBase>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <InputBase
            variant="h6"
            type="float"
            onChange={handleAmountChange}
            placeholder="Amount"
          >{`$${newExpense.amount}`}</InputBase>

          <Select
            labelId="time-type-select-label"
            id="time-type-select"
            value={newExpense.timeType}
            label="Time"
            onChange={handleTimeTypeChange}
            variant="standard"
          >
            <MenuItem value="month">month</MenuItem>
            <MenuItem value="year">year</MenuItem>
          </Select>
        </Box>
      </Box>

      {/* TODO: remove expense */}
      {isNew ? (
        <Button
          variant="contained"
          onClick={createExpense}
          disabled={newExpense.name === "" || newExpense.amount === 0}
        >
          Create
        </Button>
      ) : (
        <Button
          sx={{
            display:
              newExpense.name === expense.name &&
              newExpense.amount === expense.amount &&
              newExpense.category === expense.category &&
              newExpense.timeType === expense.timeType
                ? "none"
                : "inline",
          }}
          variant="contained"
          onClick={createExpense}
        >
          Update
        </Button>
      )}
    </ListItem>
  )
}

export default ExpenseItem
