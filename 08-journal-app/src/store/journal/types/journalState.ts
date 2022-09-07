type notes = {
    isSaving: boolean,
    messageSave: string,
    notes: any[],
    active: {
        id: string,
        title: string,
        body:string,
        date: number,
        imageUrls:any[]
    }
};

export const initialState: notes = {
        isSaving: false,
        messageSave: '',
        notes: [],
        active: {
            id: '',
            title: '',
            body: '',
            date: 123456,
            imageUrls:[]
        }
} 