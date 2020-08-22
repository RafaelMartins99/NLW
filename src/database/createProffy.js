module.exports = async function(db, { proffyValue, classValue, classScheduleValues}) {
    // inserir dados na tabela de proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatssap,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatssap}",
            "${proffyValue.bio}"
        );
    `)
    const proffy_id = insertedProffy.lastID

//inserir valores na tabela Classes
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        )   VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
        );
    `)

    const class_id = insertedClass.lastID

    //inserir dados na tabela class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    //executando toso os db.runs() das class_schedules
    await Promise.all(insertedAllClassScheduleValues)

}