import { babyNamesProps } from "../baby-names";

interface babyNamesMAPprops {
    name: babyNamesProps
}

export function OneBabyElement(props: babyNamesMAPprops): JSX.Element {
    const name = props.name
    return (
        <>
            {name.sex === 'm' ? <p className="male">{name.name}</p>:<p className="female">{name.name}</p>}
        </>
    )
}