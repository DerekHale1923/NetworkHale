import {create} from "react-test-renderer";
import ProfileStatus from "../Components/Profile/ProfileStatus/ProfileStatus";




describe('ProfileStatus component', () => {
    test('status from props should be in the state',() => {
    const component = create(<ProfileStatus statusOuter={'statusHelloTest'}/>)

        expect(ProfileStatus.status).toBe('statusHelloTest')
    })
})