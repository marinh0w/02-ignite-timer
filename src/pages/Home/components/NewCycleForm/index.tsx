import { useForm } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  owner: zod.string().optional(),
  minutesAmount: zod
    .number(0)
    .min(5, "O ciclo precisa ser no mínimo 5 minutos")
    .max(60, "O ciclo precisa ser no máximo 60 minutos"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;


export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmout: 0,
    },
  });

  return (
    <FormContainer>
      <label htmlFor="">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Banana" />
      </datalist>

      <label htmlFor="">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={1}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
