
// mainClass -> 'btn'
// additional -> [dtn_active]
// mods -> {danger: isDanger, primary: isPrimary}


export function classNames(mainClass, mods = {}, additional = []) {
    return [
        mainClass,
        ...[additional.filter(Boolean)],
        ...Object.entries(mods).filter(([className, value]) =>
            Boolean(className !== "undefined" && value)
        ).map(([className]) => className),
    ].join(' ');
}