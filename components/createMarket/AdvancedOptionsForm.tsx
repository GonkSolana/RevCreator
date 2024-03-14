import { Switch } from "@headlessui/react";
import { FormState, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { CreateMarketFormValues } from "../../pages/market/create";
import { classNames } from "../../utils/general";

type AdvancedOptionsFormProps = {
  useAdvancedOptions: boolean;
  register: UseFormRegister<CreateMarketFormValues>;
  formState: FormState<CreateMarketFormValues>;
  setValue: UseFormSetValue<CreateMarketFormValues>;
  totalMarketAccountSizes: {
    totalEventQueueSize: number;
    totalRequestQueueSize: number;
    totalOrderbookSize: number;
  };
};
export default function AdvancedOptionsForm({
                                              useAdvancedOptions,
                                              register,
                                              setValue,
                                              formState: { errors },
                                              totalMarketAccountSizes,
                                            }: AdvancedOptionsFormProps) {
    return (
      <div className="space-y-3">
        {/* The rest of your component code remains the same */}
      </div>
  );
}
