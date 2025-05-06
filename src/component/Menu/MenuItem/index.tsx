import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { GameCategories, GameGenres } from "../../../redux/App/types"
import { ApplicationStore } from "../../../redux/types"
import { setFilter } from "../../../redux/App/actionCreators"
import MenuItem from "./MenuItem"
import { AppDispatch } from "../../../main"

const MenuItemContainer: React.FC<{filter: GameCategories | GameGenres; children?: React.ReactNode}> = ({
    filter, 
    children
}) => {
    const dispatch = useDispatch<AppDispatch>()
    const {filter: currentFilter} = useSelector(
        (state: ApplicationStore) => state.app
    )

    const onClick = () => {
        dispatch(setFilter({ filter }))
    }

    return (
        <MenuItem onClick={onClick} active={currentFilter === filter}>
            {children}
        </MenuItem>
    )
}

export default MenuItemContainer;