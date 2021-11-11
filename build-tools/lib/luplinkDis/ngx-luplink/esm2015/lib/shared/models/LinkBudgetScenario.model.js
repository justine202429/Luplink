export class LinkBudgetScenario {
    constructor(power) {
        this.powerIn = 0;
        this.powerOut = 0;
        this.powerIn = power;
        this.components = {};
        this.points = [];
    }
    setPowerIn(power) {
        this.powerIn = power;
    }
    getPowerOut() {
        return this.powerOut;
    }
    getLabels() {
        /**
        * Returns the different labels for the components with their associated positions in
        * the form of a list of {label, position};
        */
        const labels = [];
        Object.entries(this.components).forEach(([key, value]) => {
            const label = { name: value.label, position: value.position + value.width / 2 };
            labels.push(label);
        });
        // for (const key in this.components) {
        //     const c = this.components[key];
        //     const label = { name: c.label, position: c.position + c.width / 2 };
        //     labels.push(label);
        // }
        return labels;
    }
    addComponent(id, LinkBudgetComponent) {
        this.components[id] = LinkBudgetComponent;
    }
    addComponents(components) {
        /**
         * This method adds multiples components at once
         */
        components.forEach((s) => {
            this.addComponent(s.id, s.component);
        });
    }
    editGain(id, value) {
        this.components[id].gain = value;
    }
    editGains(gains) {
        /**
         * Edit multiple gains at once, these can be provided by a formGroup using the formGroup.formValues attribute
         */
        // console.log(gains.keys());
        Object.keys(gains).forEach((key) => {
            this.editGain(key, gains[key]);
        });
    }
    numberOfComponents() {
        return Object.keys(this.components).length;
    }
    getPoints() {
        return this.points;
    }
    randomize(amplitude = 30) {
        /** This changes the gain from the components with random values and return the new components */
        const excluded = ['tx', 'rx'];
        Object.keys(this.components).forEach((id) => {
            if (!excluded.includes(id)) {
                this.components[id].gain = Math.round((Math.random() - 0.8) * amplitude); // Rounded to nearest integer
            }
        });
        this.powerIn = Math.random() * amplitude;
        return this.components;
    }
    compute(link = 'uplink') {
        /** This function gives us the points needed to plot our LB graph */
        // FIXME: Tried to make this clean (still better than before) but forgot about pass by reference and now it looks like it could be way cleaner.
        // Depending on the kind of link we want to go backward
        const isUp = link === 'uplink';
        const lastPoint = { x: isUp ? 0 : 100, y: this.powerIn };
        const points = [{ x: lastPoint.x, y: lastPoint.y }];
        const discontinuityPoint = { x: 0, y: 0 };
        Object.values(this.components).forEach((LinkBudgetComponent) => {
            if (!LinkBudgetComponent.linear) {
                // Here we create the discontinuity by adding a point with same abscissa
                discontinuityPoint.x = lastPoint.x;
                discontinuityPoint.y = lastPoint.y + LinkBudgetComponent.gain;
                points.push({ x: discontinuityPoint.x, y: discontinuityPoint.y });
            }
            if (isUp)
                lastPoint.x += LinkBudgetComponent.width;
            if (!isUp)
                lastPoint.x -= LinkBudgetComponent.width;
            (lastPoint.y += LinkBudgetComponent.gain);
            points.push({ x: lastPoint.x, y: lastPoint.y });
        });
        this.powerOut = lastPoint.y;
        this.points = points;
        // for (const id in this.components) {
        //   if (Object.prototype.hasOwnProperty.call(this.components, id)) {
        //     const LinkBudgetComponent = this.components[id];
        //     if (!LinkBudgetComponent.linear) {
        //     // Here we create the discontinuity by adding a point with same abscissa
        //       discontinuityPoint.x = lastPoint.x;
        //       discontinuityPoint.y = lastPoint.y + LinkBudgetComponent.gain;
        //       points.push({ x: discontinuityPoint.x, y: discontinuityPoint.y });
        //     }
        //     (lastPoint.x += LinkBudgetComponent.width);
        //     (lastPoint.y += LinkBudgetComponent.gain);
        //     points.push({ x: lastPoint.x, y: lastPoint.y });
        //   }
        //   this.powerOut = lastPoint.y;
        //   this.points = points;
        // // return points;
        // }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua0J1ZGdldFNjZW5hcmlvLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWx1cGxpbmsvc3JjL2xpYi9zaGFyZWQvbW9kZWxzL0xpbmtCdWRnZXRTY2VuYXJpby5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQSxNQUFNLE9BQU8sa0JBQWtCO0lBVzdCLFlBQVksS0FBYTtRQVZqQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFTM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRU0sU0FBUztRQUNkOzs7VUFHRTtRQUNGLE1BQU0sTUFBTSxHQUF5QyxFQUFFLENBQUM7UUFDeEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUN2RCxNQUFNLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDaEYsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNILHVDQUF1QztRQUN2QyxzQ0FBc0M7UUFDdEMsMkVBQTJFO1FBQzNF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IExpbmtCdWRnZXRDb21wb25lbnQge1xuICBsYWJlbDogc3RyaW5nO1xuICBnYWluOiBudW1iZXI7XG4gIGxpbmVhcjogYm9vbGVhbjtcbiAgcG9zaXRpb246IG51bWJlcjsgLy8gVGhpcyBpcyByZWR1bmRhbnQgI0ZJWE1FXG4gIHdpZHRoOiBudW1iZXI7IC8vIFRoZXNlIHZhbHVlcyBhcmUgZGVmaW5lZCBpbiBwZXJjZW50XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIExpbmtCdWRnZXRTY2VuYXJpbyB7XG4gIHByaXZhdGUgcG93ZXJJbjogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIHBvd2VyT3V0OiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgY29tcG9uZW50czoge1xuICAgIFtpZDogc3RyaW5nXTogTGlua0J1ZGdldENvbXBvbmVudDtcbiAgfTtcblxuICBwcml2YXRlIHBvaW50czogUG9pbnRbXTtcblxuICBjb25zdHJ1Y3Rvcihwb3dlcjogbnVtYmVyKSB7XG4gICAgdGhpcy5wb3dlckluID0gcG93ZXI7XG4gICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgdGhpcy5wb2ludHMgPSBbXTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQb3dlckluKHBvd2VyOiBudW1iZXIpIHtcbiAgICB0aGlzLnBvd2VySW4gPSBwb3dlcjtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQb3dlck91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3dlck91dDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRMYWJlbHMoKSB7XG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIHRoZSBkaWZmZXJlbnQgbGFiZWxzIGZvciB0aGUgY29tcG9uZW50cyB3aXRoIHRoZWlyIGFzc29jaWF0ZWQgcG9zaXRpb25zIGluXG4gICAgKiB0aGUgZm9ybSBvZiBhIGxpc3Qgb2Yge2xhYmVsLCBwb3NpdGlvbn07XG4gICAgKi9cbiAgICBjb25zdCBsYWJlbHM6IHsgbmFtZTogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyIH1bXSA9IFtdO1xuICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuY29tcG9uZW50cykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbCA9IHsgbmFtZTogdmFsdWUubGFiZWwsIHBvc2l0aW9uOiB2YWx1ZS5wb3NpdGlvbiArIHZhbHVlLndpZHRoIC8gMiB9O1xuICAgICAgbGFiZWxzLnB1c2gobGFiZWwpO1xuICAgIH0pO1xuICAgIC8vIGZvciAoY29uc3Qga2V5IGluIHRoaXMuY29tcG9uZW50cykge1xuICAgIC8vICAgICBjb25zdCBjID0gdGhpcy5jb21wb25lbnRzW2tleV07XG4gICAgLy8gICAgIGNvbnN0IGxhYmVsID0geyBuYW1lOiBjLmxhYmVsLCBwb3NpdGlvbjogYy5wb3NpdGlvbiArIGMud2lkdGggLyAyIH07XG4gICAgLy8gICAgIGxhYmVscy5wdXNoKGxhYmVsKTtcbiAgICAvLyB9XG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIHB1YmxpYyBhZGRDb21wb25lbnQoaWQ6IHN0cmluZywgTGlua0J1ZGdldENvbXBvbmVudDogTGlua0J1ZGdldENvbXBvbmVudCkge1xuICAgIHRoaXMuY29tcG9uZW50c1tpZF0gPSBMaW5rQnVkZ2V0Q29tcG9uZW50O1xuICB9XG5cbiAgcHVibGljIGFkZENvbXBvbmVudHMoY29tcG9uZW50czogeyBpZDogc3RyaW5nOyBjb21wb25lbnQ6IExpbmtCdWRnZXRDb21wb25lbnQgfVtdKSB7XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgYWRkcyBtdWx0aXBsZXMgY29tcG9uZW50cyBhdCBvbmNlXG4gICAgICovXG5cbiAgICBjb21wb25lbnRzLmZvckVhY2goKHMpID0+IHtcbiAgICAgIHRoaXMuYWRkQ29tcG9uZW50KHMuaWQsIHMuY29tcG9uZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBlZGl0R2FpbihpZDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5jb21wb25lbnRzW2lkXS5nYWluID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgZWRpdEdhaW5zKGdhaW5zOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KSB7XG4gICAgLyoqXG4gICAgICogRWRpdCBtdWx0aXBsZSBnYWlucyBhdCBvbmNlLCB0aGVzZSBjYW4gYmUgcHJvdmlkZWQgYnkgYSBmb3JtR3JvdXAgdXNpbmcgdGhlIGZvcm1Hcm91cC5mb3JtVmFsdWVzIGF0dHJpYnV0ZVxuICAgICAqL1xuICAgIC8vIGNvbnNvbGUubG9nKGdhaW5zLmtleXMoKSk7XG5cbiAgICBPYmplY3Qua2V5cyhnYWlucykuZm9yRWFjaCgoa2V5OmFueSkgPT4ge1xuICAgICAgdGhpcy5lZGl0R2FpbihrZXksIGdhaW5zW2tleV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG51bWJlck9mQ29tcG9uZW50cygpOiBudW1iZXIge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNvbXBvbmVudHMpLmxlbmd0aDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQb2ludHMoKTogUG9pbnRbXSB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnRzO1xuICB9XG5cbiAgcHVibGljIHJhbmRvbWl6ZShhbXBsaXR1ZGU6IG51bWJlciA9IDMwKTogeyBbaWQ6IHN0cmluZ106IExpbmtCdWRnZXRDb21wb25lbnQgfSB7XG4gICAgLyoqIFRoaXMgY2hhbmdlcyB0aGUgZ2FpbiBmcm9tIHRoZSBjb21wb25lbnRzIHdpdGggcmFuZG9tIHZhbHVlcyBhbmQgcmV0dXJuIHRoZSBuZXcgY29tcG9uZW50cyAqL1xuICAgIGNvbnN0IGV4Y2x1ZGVkID0gWyd0eCcsICdyeCddO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuY29tcG9uZW50cykuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIGlmICghZXhjbHVkZWQuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tpZF0uZ2FpbiA9IE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgLSAwLjgpICogYW1wbGl0dWRlKTsvLyBSb3VuZGVkIHRvIG5lYXJlc3QgaW50ZWdlclxuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMucG93ZXJJbiA9IE1hdGgucmFuZG9tKCkgKiBhbXBsaXR1ZGU7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cztcbiAgfVxuXG4gIHB1YmxpYyBjb21wdXRlKGxpbms6ICd1cGxpbmsnIHwgJ2Rvd25saW5rJyA9ICd1cGxpbmsnKSB7XG4gICAgLyoqIFRoaXMgZnVuY3Rpb24gZ2l2ZXMgdXMgdGhlIHBvaW50cyBuZWVkZWQgdG8gcGxvdCBvdXIgTEIgZ3JhcGggKi9cbiAgICAvLyBGSVhNRTogVHJpZWQgdG8gbWFrZSB0aGlzIGNsZWFuIChzdGlsbCBiZXR0ZXIgdGhhbiBiZWZvcmUpIGJ1dCBmb3Jnb3QgYWJvdXQgcGFzcyBieSByZWZlcmVuY2UgYW5kIG5vdyBpdCBsb29rcyBsaWtlIGl0IGNvdWxkIGJlIHdheSBjbGVhbmVyLlxuICAgIC8vIERlcGVuZGluZyBvbiB0aGUga2luZCBvZiBsaW5rIHdlIHdhbnQgdG8gZ28gYmFja3dhcmRcbiAgICBjb25zdCBpc1VwID0gbGluayA9PT0gJ3VwbGluayc7XG4gICAgY29uc3QgbGFzdFBvaW50OiBQb2ludCA9IHsgeDogaXNVcCA/IDAgOiAxMDAsIHk6IHRoaXMucG93ZXJJbiB9O1xuICAgIGNvbnN0IHBvaW50czogUG9pbnRbXSA9IFt7IHg6IGxhc3RQb2ludC54LCB5OiBsYXN0UG9pbnQueSB9XTtcbiAgICBjb25zdCBkaXNjb250aW51aXR5UG9pbnQ6IFBvaW50ID0geyB4OiAwLCB5OiAwIH07XG4gICAgT2JqZWN0LnZhbHVlcyh0aGlzLmNvbXBvbmVudHMpLmZvckVhY2goKExpbmtCdWRnZXRDb21wb25lbnQpID0+IHtcbiAgICAgIGlmICghTGlua0J1ZGdldENvbXBvbmVudC5saW5lYXIpIHtcbiAgICAgICAgLy8gSGVyZSB3ZSBjcmVhdGUgdGhlIGRpc2NvbnRpbnVpdHkgYnkgYWRkaW5nIGEgcG9pbnQgd2l0aCBzYW1lIGFic2Npc3NhXG4gICAgICAgIGRpc2NvbnRpbnVpdHlQb2ludC54ID0gbGFzdFBvaW50Lng7XG4gICAgICAgIGRpc2NvbnRpbnVpdHlQb2ludC55ID0gbGFzdFBvaW50LnkgKyBMaW5rQnVkZ2V0Q29tcG9uZW50LmdhaW47XG4gICAgICAgIHBvaW50cy5wdXNoKHsgeDogZGlzY29udGludWl0eVBvaW50LngsIHk6IGRpc2NvbnRpbnVpdHlQb2ludC55IH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNVcCkgbGFzdFBvaW50LnggKz0gTGlua0J1ZGdldENvbXBvbmVudC53aWR0aDtcbiAgICAgIGlmICghaXNVcCkgbGFzdFBvaW50LnggLT0gTGlua0J1ZGdldENvbXBvbmVudC53aWR0aDtcbiAgICAgIChsYXN0UG9pbnQueSArPSBMaW5rQnVkZ2V0Q29tcG9uZW50LmdhaW4pO1xuXG4gICAgICBwb2ludHMucHVzaCh7IHg6IGxhc3RQb2ludC54LCB5OiBsYXN0UG9pbnQueSB9KTtcbiAgICB9KTtcbiAgICB0aGlzLnBvd2VyT3V0ID0gbGFzdFBvaW50Lnk7XG4gICAgdGhpcy5wb2ludHMgPSBwb2ludHM7XG4gICAgLy8gZm9yIChjb25zdCBpZCBpbiB0aGlzLmNvbXBvbmVudHMpIHtcbiAgICAvLyAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jb21wb25lbnRzLCBpZCkpIHtcbiAgICAvLyAgICAgY29uc3QgTGlua0J1ZGdldENvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1tpZF07XG5cbiAgICAvLyAgICAgaWYgKCFMaW5rQnVkZ2V0Q29tcG9uZW50LmxpbmVhcikge1xuICAgIC8vICAgICAvLyBIZXJlIHdlIGNyZWF0ZSB0aGUgZGlzY29udGludWl0eSBieSBhZGRpbmcgYSBwb2ludCB3aXRoIHNhbWUgYWJzY2lzc2FcbiAgICAvLyAgICAgICBkaXNjb250aW51aXR5UG9pbnQueCA9IGxhc3RQb2ludC54O1xuICAgIC8vICAgICAgIGRpc2NvbnRpbnVpdHlQb2ludC55ID0gbGFzdFBvaW50LnkgKyBMaW5rQnVkZ2V0Q29tcG9uZW50LmdhaW47XG4gICAgLy8gICAgICAgcG9pbnRzLnB1c2goeyB4OiBkaXNjb250aW51aXR5UG9pbnQueCwgeTogZGlzY29udGludWl0eVBvaW50LnkgfSk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICAobGFzdFBvaW50LnggKz0gTGlua0J1ZGdldENvbXBvbmVudC53aWR0aCk7XG4gICAgLy8gICAgIChsYXN0UG9pbnQueSArPSBMaW5rQnVkZ2V0Q29tcG9uZW50LmdhaW4pO1xuXG4gICAgLy8gICAgIHBvaW50cy5wdXNoKHsgeDogbGFzdFBvaW50LngsIHk6IGxhc3RQb2ludC55IH0pO1xuICAgIC8vICAgfVxuXG4gICAgLy8gICB0aGlzLnBvd2VyT3V0ID0gbGFzdFBvaW50Lnk7XG4gICAgLy8gICB0aGlzLnBvaW50cyA9IHBvaW50cztcbiAgICAvLyAvLyByZXR1cm4gcG9pbnRzO1xuICAgIC8vIH1cbiAgfVxufVxuIl19