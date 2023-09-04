function createPerson(name:string | null){
    /**
     * TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:


     */
    console.log(name!.toUpperCase());
}


// null test



createPerson(null);

export{}