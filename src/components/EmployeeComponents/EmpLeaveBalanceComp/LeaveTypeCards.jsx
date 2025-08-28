import React from 'react';
import LeaveTypeCardWrap from './wrapper/LeaveTypeCardWrap';
import AnnualLeaveicon from '../../../assets/svgs/EmpRequestLeave/AnnualLeaveicon';
import SickLeaveIcon from '../../../assets/svgs/EmpLeaveBalance/SickLeaveIcon';
import EmergencyLeaveIcon from '../../../assets/svgs/EmpLeaveBalance/EmergencyLeaveIcon';
import CasualLeaveIcons from '../../../assets/svgs/EmpLeaveBalance/CasualLeaveIcons';
import CompesatoryLeaveIcon from '../../../assets/svgs/EmpLeaveBalance/CompesatoryLeaveIcon';

const LeaveTypeCards = () => {
    return (
        // --- RESPONSIVE CHANGE ---
        // Switched from flexbox to a responsive grid.
        // 1 column on mobile, 2 on small screens, 3 on medium, up to 5 on xl screens.
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-5">
            <LeaveTypeCardWrap logo={<AnnualLeaveicon />} typeofLeave={'Annual'} available={12} total={20} used={8} usage={'40%'} />
            <LeaveTypeCardWrap logo={<SickLeaveIcon />} typeofLeave={'Sick'} available={9} total={12} used={3} usage={'25%'} />
            <LeaveTypeCardWrap logo={<CasualLeaveIcons />} typeofLeave={'Casual'} available={5} total={10} used={5} usage={'50%'} />
            <LeaveTypeCardWrap logo={<EmergencyLeaveIcon />} typeofLeave={'Emergency'} available={4} total={5} used={1} usage={'20%'} />
            <LeaveTypeCardWrap logo={<CompesatoryLeaveIcon />} typeofLeave={'Compensatory Off'} available={4} total={5} used={1} usage={'20%'} />
        </div>
    );
};

export default LeaveTypeCards;